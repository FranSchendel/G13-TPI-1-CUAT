BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "Preguntas" (
	"preguntas_ods"	TEXT NOT NULL,
	"respuesta_correcta"	TEXT NOT NULL,
	"respuesta_incorrecta1"	TEXT NOT NULL,
	"respuesta_incorrecta2"	TEXT NOT NULL,
	"respuesta_incorrecta3"	TEXT NOT NULL,
	"justificacion"	TEXT NOT NULL,
	PRIMARY KEY("preguntas_ods")
);
CREATE TABLE IF NOT EXISTS "Jugador" (
	"id"	INTEGER NOT NULL,
	"nombre"	TEXT NOT NULL,
	"puntaje"	INTEGER NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Ranking" (
	"posicion"	INTEGER NOT NULL,
	"puntaje"	INTEGER NOT NULL,
	"id_jugador"	INTEGER NOT NULL,
	FOREIGN KEY("id_jugador") REFERENCES "Jugador"("id")
);
CREATE TABLE IF NOT EXISTS "Sugerencias" (
	"sugerencias"	TEXT NOT NULL,
	"id_jugador"	INTEGER NOT NULL,
	FOREIGN KEY("id_jugador") REFERENCES "Jugador"("id")
);
COMMIT;
