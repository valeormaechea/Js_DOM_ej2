let alerta = document.getElementById("alertMensaje");

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
    this.anioNacim = document.getElementById(inputAnioNacim);
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

    console.log(this.generacion);
    console.log(caracteristica);
    alerta.innerHTML(
      `Pertenece a la generación ${this.generacion}, cuya caracteristica principal es ${caracteristica}.`
    );
    alerta.className(`alert alert-info`);

    // alert.(`Pertenece a la generación "${this.generacion}", cuya
    //         caracteristica principal es: ${caracteristica}<BR>`);
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
}

function nuevaPersona() {
  let nombre = document.getElementById(inputNombre);
  let apellido = document.getElementById(inputApellido);
  let edad = document.getElementById(inputEdad);
  let dni = document.getElementById(inputDNI);
  let sexo = document.getElementById(inputSexo);
  let peso = document.getElementById(inputPeso);
  let altura = document.getElementById(inputAltura);
  let anioNacim = document.getElementById(inputAnioNacim);
  let persona = new Persona(
    nombre,
    apellido,
    edad,
    dni,
    sexo,
    peso,
    altura,
    anioNacim
  );
}

function generacion() {}

function mayoriaEdad() {}
