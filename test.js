const counter = {
  c: 0,
  get count() {
    return this.c++;
  }, // Hər çağırıldıqda `c`-ni artırır
};
