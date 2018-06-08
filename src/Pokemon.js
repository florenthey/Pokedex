class Pokemon {
      constructor(data) {
          this.id = data.id;
          this.name = data.name;
          this.sprite = data.sprites.front_default;
          this.type = data.types[0].type.name;
          this.height = data.height/10;
          this.weight = data.weight/10;
      }
}

export default Pokemon;