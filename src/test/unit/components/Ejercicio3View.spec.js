import { shallowMount } from "@vue/test-utils";
import Child from "@/components/Child.vue";

//validar que al dar clic sobre el botón del componente Child, se envíe algún texto
describe("Child.vue", () => {
  
    test("Comprobamos que al dar clic en Enviar se llame a la mutación de Vuex", async () => {
    // Al usar estados globlales, debo crear un mock del store de Vuex
    const commitMock = jest.fn(); //commitMock es una función simulada
    const storeMock = { //storeMock es un objeto simulado, sirve para simular el comportamiento del store
      commit: commitMock, //Esta linea sirve para simular la llamada a la mutación
    };

    // Montar el componente con el mock del store
    const wrapper = shallowMount(Child, {
      global: {
        mocks: {
          $store: storeMock,
        },
      },
    });

    // Simular texto ingresado en el input
    const input = wrapper.find("input");
    await input.setValue("Texto enviado");

    // Simular clic en el botón
    const botonEnviar = wrapper.find(".btn-enviar");
    await botonEnviar.trigger("click");

    // Verificar que la mutación setText fue llamada con el texto correcto
    expect(commitMock).toHaveBeenCalledWith("setText", "Texto enviado");
  });
});
