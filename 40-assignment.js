function makeAlbum(
  num_of_tracks = 0,
  album_title = "Lorem Ipsum",
  artist_name = "Lorem Ipsum"
) {
  return {
    num_of_tracks,
    album_title,
    artist_name,
  };
}

console.log(JSON.stringify(makeAlbum()));

console.log(JSON.stringify(makeAlbum(5)));
