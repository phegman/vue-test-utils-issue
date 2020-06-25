import { shallowMount } from "@vue/test-utils";
import App from "@/App";
import { nextTick } from "vue";

describe("App", () => {
  describe("when pressing the up key", () => {
    let wrapper;

    const runTests = () => {
      it("should not update homePressed", () => {
        expect(wrapper.vm.homePressed).toBe(false);
      });

      it("should not update endPressed", () => {
        expect(wrapper.vm.endPressed).toBe(false);
      });

      it("should update upPressed", () => {
        expect(wrapper.vm.upPressed).toBe(true);
      });

      it("should not update downPressed", () => {
        expect(wrapper.vm.downPressed).toBe(false);
      });

      it("should not update pageUpPressed", () => {
        expect(wrapper.vm.pageUpPressed).toBe(false);
      });

      it("should not update pageDownPressed", () => {
        expect(wrapper.vm.pageUpPressed).toBe(false);
      });
    };

    describe("when using key modifier", () => {
      beforeAll(async () => {
        wrapper = shallowMount(App);

        wrapper.find(".keys").trigger("keydown.up");

        await nextTick();
      });

      runTests();
    });

    describe("when using keyCode", () => {
      beforeAll(async () => {
        wrapper = shallowMount(App);

        wrapper.find(".keys").trigger("keydown", {
          keyCode: 38,
        });

        await nextTick();
      });

      runTests();
    });

    describe("when using key", () => {
      beforeAll(async () => {
        wrapper = shallowMount(App);

        wrapper.find(".keys").trigger("keydown", {
          key: "up",
        });

        await nextTick();
      });

      runTests();
    });
  });
});
