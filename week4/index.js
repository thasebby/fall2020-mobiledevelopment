import Sidebar from './components/Sidebar.js';

render(){
  const s = new Sidebar({
    menu: [
      'Albert Eggstein',
      'Attila the Hen',
      'Attila the Hen',
      'Dixie Chick',
      'Gregory Peck',
      'Mary Poopins'
    ]
  });


  }
  const list = Sidebar.map((a) => <li key={a.menu})>{a.menu}</li>);

  return{
    <div>
      <ul>
        {list}
      </ul>
    </div>
  };

}
/* 
  TODO: Use the render() method of Sidebar to show HTML response on console. Results should be wrapped in <ul></ul>
  
  The final result should look like the following:
  <ul><li>Albert Eggstein</li><li>Attila the Hen</li><li>Attila the Hen</li><li>Dixie Chick</li><li>Gregory Peck</li><li>Mary Poopins</li></ul>
*/
console.log();
