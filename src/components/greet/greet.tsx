interface GreetPorps {
  name?: string;
}

const Greet = ({ name }: GreetPorps) => {
  return <div>Hello {name}</div>;
};

export default Greet;
