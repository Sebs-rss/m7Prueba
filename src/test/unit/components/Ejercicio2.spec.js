import { shallowMount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import Ejercicio1View from "@/views/Ejercicio1View.vue";
import Ejercicio3View from "@/views/Ejercicio3View.vue";


// Test4: Verificar comportamiento de componente que controla la vista con Vue Router
describe("Ejercicio1View", () => {
  test("Comprobando la existencia del componente que controla la vista Ejercicio1", async () => {
    // Configuramos el router
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "/ejercicio1",
          name: "Ejercicio1",
          component: Ejercicio1View,
        },
      ],
    });

    // Redirigimos a la ruta y esperamos que el router esté listo
    router.push("/ejercicio1");
    await router.isReady();

    const wrapper = shallowMount(Ejercicio1View, {
      global: {
        plugins: [router],
      },
    });

    // Verificamos si el componente existe
    expect(wrapper.findComponent(Ejercicio1View).exists()).toBe(true);
  });
});

// Test5: Verificar comportamiento de componente que controla la vista con Vue Router
describe("Ejercicio3View", () => {
    test("Comprobando la existencia del componente que controla la vista Ejercicio3", async () => {
      // Configuramos el router
      const router = createRouter({
        history: createWebHistory(),
        routes: [
          {
            path: "/ejercicio3",
            name: "Ejercicio3",
            component: Ejercicio3View,
          },
        ],
      });
  
      // Redirigimos a la ruta y esperamos que el router esté listo
      router.push("/ejercicio3");
      await router.isReady();
  
      const wrapper = shallowMount(Ejercicio3View, {
        global: {
          plugins: [router],
        },
      });
  
      // Verificamos si el componente existe
      expect(wrapper.findComponent(Ejercicio3View).exists()).toBe(true);
    });
  });
  