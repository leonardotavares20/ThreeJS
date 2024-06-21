import * as THREE from "three";

// Scene, Camera, Renderer

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, // FOV em graus
  window.innerWidth / innerHeight, // Aspect Ratio
  0.1, // Near plano de corte / O elemento que estiver abaixo disso é cortado da scene
  1000 //Far plano de corte /  O elemento que acima disso é cortado da scene
);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight); //Recebe dois parametros para configurar o tamanho que o elemento vai ser renderizado
document.body.appendChild(renderer.domElement);

//Cube

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

camera.position.z = 5; // Por padrao o elemento é adicionado nas coordenadas (0, 0, 0), entao isso faz com que a camera e o elemento fiquem um dentro do outro. Entao para evitar isso pode se mover a camera um pouco para fora.


// Funcao que cria um loop que o renderizador desenha a cena toda vez que a tela for atualizada, isso com a funcao requestAnimationFrame

function animate() {
  requestAnimationFrame(animate);
  
  //Animando o cubo a cada iteracao do loop
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();
