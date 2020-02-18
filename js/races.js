// d3.json("races/elf-high.json", function(json) {
//     console.log(json);
// })

const race_click = () =>{
  document.getElementById("info").style = "display:normal";
}


fetch('../races/elf-high.json')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson)
  })