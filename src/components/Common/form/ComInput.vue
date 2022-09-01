<template>
  <q-input
    ref="childcheck"
    input-class="input"
    :value="value"
    :class="{ computedClass, contentClass }"
    :style="contentStyle"
    v-bind="$attrs"
    v-on="listeners"
    :rules="rules"
    :label="$q.screen.lt.sm ? label : void 0"
    :dense="_dense()"
    :no-error-icon="noErrorIcon"
    :disable="disable"
    :readonly="readonly"
    :filled="_filled()"
    :outlined="_outlined()"
    :standout="_standout()"
    :borderless="_borderless()"
    :square="_square()"
    :rounded="_rounded()"
    @mouseover.native="hover = true"
    @mouseleave.native="hover = false"
    :requiredValid="requiredValid"
  >
    <template v-for="slotName in Object.keys($slots)" v-slot:[slotName]>
      <slot :name="slotName" />
    </template>
    <!--  -->
    <template v-slot:before v-if="!$q.screen.lt.sm">
      <label style="text-align:right;font-size:16px;" :style="!needLabelMorewidth(label) ? 'width:120px;' : 'width:120px;'">
        <span v-if="requiredValid" :class="{required:requiredValid}">＊</span>{{label}}:
      </label>
    </template>
    <!--  -->
    <template v-slot:append>
      <template
        v-if="clearable && hover && value != null && value !== '' && !disable"
      >
        <q-icon
          :name="clearIcon"
          class="cursor-pointer"
          @click.prevent.stop="_doClear()"
        />
      </template>
      <slot v-else name="append" />
    </template>
  </q-input>
</template>
<script>
import FormMixin from "./form-mixin.js";
import defaultSetting from "./default-setting";
export default {
  name: "ComInput",
  inheritAttrs: false,
  mixins: [FormMixin],
  props: {
    value: {
      type: [String, Number],
    },
    rules: Array,
    clearable: Boolean,
    clearIcon: {
      type: String,
      default: "cancel",
    },
    noClearFocus: Boolean,
    label: {
      type: String,
      default: undefined,
    },
    filled: {
      type: Boolean,
      default: undefined,
    },
    outlined: {
      type: Boolean,
      default: undefined,
    },
    standout: {
      type: Boolean,
      default: undefined,
    },
    borderless: {
      type: Boolean,
      default: undefined,
    },
    square: {
      type: Boolean,
      default: undefined,
    },
    rounded: {
      type: Boolean,
      default: undefined,
    },
    requiredValid:{ //此欄位是否需要驗證
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      hover: false,
    };
  },
  computed: {
    listeners: function() {
      const vm = this;
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign(
        {},
        // 从父级添加所有的监听器
        vm.$listeners,
        // 添加自定义监听器，或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          input: function(value) {
            vm._doInput(value);
          },
        }
      );
    },
  },
  methods: {
    _filled() {
      const undef =
        this.filled === undefined &&
        this.outlined === undefined &&
        this.standout === undefined &&
        this.borderless === undefined;
      if (!undef) {
        return this.filled;
      }
      if (defaultSetting.inputDesignMode === "filled") {
        return true;
      } else {
        return false;
      }
    },
    _outlined() {
      const undef =
        this.filled === undefined &&
        this.outlined === undefined &&
        this.standout === undefined &&
        this.borderless === undefined;
      if (!undef) {
        return this.outlined;
      }
      if (defaultSetting.inputDesignMode === "outlined") {
        return true;
      } else {
        return false;
      }
    },
    _standout() {
      const undef =
        this.filled === undefined &&
        this.outlined === undefined &&
        this.standout === undefined &&
        this.borderless === undefined;
      if (!undef) {
        return this.standout;
      }
      if (defaultSetting.inputDesignMode === "standout") {
        return true;
      } else {
        return false;
      }
    },
    _borderless() {
      const undef =
        this.filled === undefined &&
        this.outlined === undefined &&
        this.standout === undefined &&
        this.borderless === undefined;
      if (!undef) {
        return this.borderless;
      }
      if (defaultSetting.inputDesignMode === "borderless") {
        return true;
      } else {
        return false;
      }
    },
    _square() {
      const undef = this.square === undefined && this.rounded === undefined;
      if (!undef) {
        return this.square;
      }
      if (defaultSetting.inputDesignCorner === "square") {
        return true;
      } else {
        return false;
      }
    },
    _rounded() {
      const undef = this.square === undefined && this.rounded === undefined;
      if (!undef) {
        return this.rounded;
      }
      if (defaultSetting.inputDesignCorner === "rounded") {
        return true;
      } else {
        return false;
      }
    },
    _dense() {
      if (this.dense === undefined) {
        return defaultSetting.denseMode;
      } else {
        return this.dense;
      }
    },
    _doClear() {
      const oldVal = this.value;
      this._doInput(null);
      //this.$nextTick(() => {
      this.$emit("clear", oldVal);
      //})
    },
    _doInput(value) {
      if (!this.disable) {
        this.$emit("input", value);
      }
    },

    /* q-input 默认方法 begin */
    resetValidation() {
      this.$refs.input.resetValidation();
    },
    validate(value) {
      return this.$refs.input.validate(value);
    },
    focus() {
      this.$refs.input.focus();
    },
    blur() {
      this.$refs.input.blur();
    },
    select() {
      this.$refs.input.select();
    },
    /* q-input 默认方法 end */
  },
};
</script>
<style lang="scss" scoped>
.required{
   color:red;
   font-size: 16px;
}
label {
  color: #000;
  font-size: 16px;
}
.input {
  padding: 0 7px;
  border: 3px solid #333;
}
</style>
