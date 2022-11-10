import { useState } from "react";

function InfoVuelo({ info }) {
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [pasajero, setPasajero] = useState("");
  const [salida, setSalida] = useState();



  const clickSalida = (e) => {
    setSalida(e.target.value)
  }
  const selecOrigen = (e) => {
    setOrigen(e.target.value);
  };
  const selecDestino = (e) => {
    setDestino(e.target.value);
  };
  const selecPasajero = (e) => {
    setPasajero(e.target.value);
  };


  return (
    <div>
      <select name="origen" id="origen" onChange={selecOrigen}>
        <option value="">Origen </option>
        <option value="BRC">Bariloche </option>
        <option value="COR">Cordoba </option>
        <option value="EPA">El Palomar </option>
        <option value="MDZ">Mendoza </option>
      </select>
      <select name="destino" id="destino" onChange={selecDestino}>
        <option value="">destino </option>
        <option value="BRC">Bariloche </option>
        <option value="COR">Cordoba </option>
        <option value="EPA">El Palomar </option>
        <option value="MDZ">Mendoza </option>
      </select>
      <select name="pasajero" id="pasajero" onChange={selecPasajero}>
        <option value="">Pasajeros</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
      </select>
      <h2>Fecha de salida</h2>
      {info.map((item, i) => {
        if (
          item.origin === origen &&
          item.destination === destino &&
          item.availability == pasajero
        )
          return (
            <div key={i}>
              <button value={item.data} onClick={clickSalida}>
                fecha: {item.data}
              </button>
              <h3 >Precio: {item.price}</h3>
            </div>
          );
      })}
      <div>
        <h2>Su vuelo sale el: {salida} desde: {origen} hasta: {destino}</h2>
      </div>
    </div>
  );
}

export default InfoVuelo;
