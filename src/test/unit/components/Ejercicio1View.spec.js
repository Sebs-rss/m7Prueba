import { shallowMount } from "@vue/test-utils";
import Ejercicio1View from "@/views/Ejercicio1View.vue";

describe("Ejercicio1View", () => {
    
  //Test1: Verificar que se reciba un valor inicial en el contador
  test("Se recibe un valor inicial en el contador", () => {
    //Declaramos lo que se va a probar
    const wrapper = shallowMount(Ejercicio1View);
    expect(wrapper.vm.contador).toBe(0); //Verificamos que el contador sea 0. "wrapper" es el componente que estamos probando. "vm"se usa para acceder a las propiedades y metodos del componente y "contador" es la propiedad que queremos probar, la cual debe ser (toBe) 0.
  });

  //Test2:Probar la funcionalidad de incremento del contador.
  test("El contador aumenta", async () => {
    const wrapper = shallowMount(Ejercicio1View);

    const botonIncrementar = wrapper.find("button"); //Encontramos el botón
    botonIncrementar.trigger("click"); //Simulamos el click
    const valor = wrapper.find(".incrementar").text(); //Definimos el valor como variable y buscamos el texto "incrementar"
    expect(valor).toBe("+1"); //Verificamos que sume 1
  });

  //Test3:Probar la funcionalidad de decremento del contador.
  test("El contador disminuye", async () => {
    const wrapper = shallowMount(Ejercicio1View);

    const botonDisminuir = wrapper.find("button"); //Encontramos el botón
    botonDisminuir.trigger("click"); //Simulamos el click
    const valor = wrapper.find(".disminuir").text(); //Definimos el valor como variable y buscamos el texto "disminuir"
    expect(valor).toBe("-1"); //Verificamos que reste 1
  });
});
