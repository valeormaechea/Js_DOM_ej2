// Declaración clase persona
class Persona {
  constructor(nombre, apellido, edad, DNI, sexo, peso, altura, anioNacim) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.DNI = DNI;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacim = anioNacim;
    this.generacion = "Falta emitir generación.";
  }

  mostrarGeneracion() {
    let caracteristica;
    if (this.anioNacim < 1949) {
      this.generacion = "Silent Generation";
      caracteristica = "austeridad.";
    } else if (1948 < this.anioNacim < 1969) {
      this.generacion = "Baby Boom";
      caracteristica = "ambición.";
    } else if (1968 < this.anioNacim < 1981) {
      this.generacion = "Generacion X";
      caracteristica = "obsesión por el éxito.";
    } else if (1980 < this.anioNacim < 1994) {
      this.generacion = "Generacion Y";
      caracteristica = "frustración.";
    } else {
      this.generacion = "Generacion Z";
      caracteristica = "irreverencia.";
    }

    document.write(`Pertenece a la generación "${this.generacion}", cuya
            caracteristica principal es: ${caracteristica}<BR>`);
  }

  // Metodo para determinar si la persona es mayor de edad y emitir mensaje
  esMayorDeEdad() {
    if (this.edad >= 18) {
      document.write(`${this.nombre} es mayor de edad.`);
    } else {
      document.write(`${this.nombre} no es mayor de edad.`);
    }
  }

  // Metodo para mostrar datos de la persona
  mostrarDatos() {
    document.write(`<br>
    <ul>
    <li>Nombre: ${this.nombre}</li>
    <li>Apellido: ${this.apellido}</li>
    <li>Edad: ${this.edad}</li>
    <li>DNI: ${this.dni}</li>
    <li>Sexo: ${this.sexo}</li>
    <li>Peso: ${this.peso} kg</li>
    <li>Altura: ${this.altura} cm</li>
    <li>Año de nacimiento: ${this.anioNacim}</li>
    <li>Generación: ${this.generacion}</li>
    </ul>
    `);
  }
 
  // Setters
  set setNombre(nombre) {
    this.nombre = nombre;
  }

  set setApellido(apellido) {
    this.apellido = apellido;
  }

  set setEdad(edad) {
    this.edad = edad;
  }

  set setSexo(sexo) {
    this.sexo = sexo;
  }

  set setDni(DNI) {
    this.DNI = DNI;
  }

  set setPeso(peso) {
    this.peso = peso;
  }

  set setAltura(altura) {
    this.altura = altura;
  }

  set setAnioNacim(anioNacim){
    this.anioNacim=anioNacim;
  }

  
}
