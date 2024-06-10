
  //   const name ='shehan Minura'
  // const position  ='Web Developer'

  // const myobj ={
  //   name:`${name}`,
  //   position:`${position}`,
  //   city :`Galle`

  // }




export default function Main(props) {
  return (
    <div>
      <h1>Main</h1>
      <ul>
        <li>{props.name}</li>
        <li>{props.position}</li>
        <li>{props.city}</li>
        <li>React</li>
        <li>Node</li>
        <li>Express</li>
      </ul>
      {props.children}
    </div>
  );
}

