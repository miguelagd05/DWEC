const playlist = [
  { titulo: "Bohemian Rhapsody", artista: "Queen", duracion: 354 },
  { titulo: "Stairway to Heaven", artista: "Led Zeppelin", duracion: 482 },
  { titulo: "Hotel California", artista: "Eagles", duracion: 391 },
  { titulo: "Billie Jean", artista: "Michael Jackson", duracion: 294 },
  { titulo: "Smells Like Teen Spirit", artista: "Nirvana", duracion: 301 },
  { titulo: "Hey Jude", artista: "The Beatles", duracion: 431 },
  { titulo: "Blinding Lights", artista: "The Weeknd", duracion: 200 },
  { titulo: "Shape of You", artista: "Ed Sheeran", duracion: 233 },
  { titulo: "Bad Guy", artista: "Billie Eilish", duracion: 194 },
  { titulo: "Despacito", artista: "Luis Fonsi", duracion: 228 }
];

console.log("--- Listado de canciones ---");
playlist.forEach(cancion => {
  console.log(`Título: ${cancion.titulo} - Artista: ${cancion.artista}`);
});