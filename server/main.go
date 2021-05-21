package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/jackc/pgx/v4/pgxpool"
	"github.com/rs/cors"
)

const (
	host     = "localhost"
	port     = 5432
	user     = "radiantwings"
	password = ""
	dbname   = "radiantwings"
)

type Pokemon struct {
	Dex_number int
	Generation int
	Name       string
	Type1      string
	Type2      string
}

func getPokemon(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Hit endpoint: /getPokemon")
	vars := mux.Vars(r)
	name := vars["name"]
	fmt.Printf("vars = %v", vars)
	dbpool, err := pgxpool.Connect(context.Background(), "postgresql://radiantwings:admin@localhost:5432/radiantwings")
	if err != nil {
		fmt.Println(os.Stderr, "Unable to connect to database: %v\n", err)
		return
	}
	defer dbpool.Close()

	var tmp Pokemon
	fmt.Println("select name, type1 from pokedex.pokemon WHERE name = " + name)
	err = dbpool.QueryRow(context.Background(), fmt.Sprintf("select * from pokedex.pokemon WHERE name = '%v'", name)).Scan(&tmp.Dex_number, &tmp.Generation, &tmp.Name, &tmp.Type1, &tmp.Type2)
	if err != nil {
		fmt.Fprintf(os.Stderr, "QueryRow failed: %v\n", err)
		os.Exit(1)
	}
	fmt.Printf("tmp = %+v\n", tmp)
	js, err := json.Marshal(&tmp)
	fmt.Printf("js = %v\n", string(js))
	w.Header().Set("Content-type", "application/json")
	w.Write(js)
}

func handleRequests() {
	r := mux.NewRouter()
	fmt.Println("Server is now running!")
	r.HandleFunc("/pokedex/{name}", getPokemon).Methods("GET")

	c := cors.New(cors.Options{
		AllowedOrigins: []string{"http://localhost:3000"},
		Debug:          true,
	}).Handler(r)
	log.Fatal(http.ListenAndServe(":8080", c))
}

func main() {
	handleRequests()
}
