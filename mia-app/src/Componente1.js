import React from "react";

const Componente1 = () => {
  return (
    <section>
      <Saluto />
    </section>
  );
};

const Persona = () => {
  return <h2>Ciao, sono Sergio</h2>;
};

const Messaggio = () => {
  return <h3>Sono un nuovo messaggio</h3>;
};

const Saluto = () => {
  return (
    <React.Fragment>
      <Persona />
      <Messaggio />
    </React.Fragment>
  );
};

export default Componente1;
