<template>
  <div class="home-container h-full flex items-center justify-center">
    <Card class="mx-auto">
      <TypographyTitle :level="2" class="text-center">
        科创股票池设定
      </TypographyTitle>
      <div class="pt-4">
        <Form
          :rules="rules"
          :model="formState"
          :label-col="{ span: 8 }"
          :wrapper-col="{ span: 12 }"
        >
          <FormItem label="科创能力总分" name="name">
            <InputGroup>
              <Row>
                <Col :span="9">
                  <InputNumber
                    :min="0"
                    v-model:value="formState.name"
                    style="width: 100%; text-align: center"
                    placeholder="科创能力总分"
                  />
                </Col>
                <Col :span="3">
                  <Input
                    v-model:value="value13"
                    style="
                      border: none;
                      pointer-events: none;
                      background-color: #fff;
                    "
                    placeholder="~"
                    disabled
                  />
                </Col>
                <Col :span="9">
                  <InputNumber
                    :min="0"
                    v-model:value="value12"
                    style="width: 100%; text-align: center"
                    placeholder="科创能力总分"
                  />
                </Col>
                <Col :span="3">
                  <Input
                    v-model:value="value13"
                    style="
                      border: none;
                      pointer-events: none;
                      background-color: #fff;
                    "
                    placeholder="分"
                    disabled
                  />
                </Col>
              </Row>
            </InputGroup>
          </FormItem>
          <FormItem label="股票上市时长" name="time">
            <InputGroup>
              <Row>
                <Col :span="9">
                  <InputNumber
                    :min="0"
                    v-model:value="value12"
                    style="width: 100%; text-align: center"
                    placeholder="股票上市时长"
                  />
                </Col>
                <Col :span="3">
                  <Input
                    v-model:value="value13"
                    style="
                      border: none;
                      pointer-events: none;
                      background-color: #fff;
                    "
                    placeholder="~"
                    disabled
                  />
                </Col>
                <Col :span="9">
                  <InputNumber
                    :min="0"
                    v-model:value="value12"
                    style="width: 100%; text-align: center"
                    placeholder="股票上市时长"
                  />
                </Col>
                <Col :span="3">
                  <Input
                    v-model:value="value13"
                    style="
                      border: none;
                      pointer-events: none;
                      background-color: #fff;
                    "
                    placeholder="天"
                    disabled
                  />
                </Col>
              </Row>
            </InputGroup>
          </FormItem>
          <FormItem label="战新行业一级">
            <Select value="" class="text-left">
              <SelectOption value="">不限</SelectOption>
            </Select>
          </FormItem>
          <FormItem label="股票池名称">
            <Input placeholder="请输入股票池名称" />
          </FormItem>
          <FormItem label="策略选择">
            <Select value="" class="text-left">
              <SelectOption value="">不限</SelectOption>
            </Select>
          </FormItem>
          <FormItem
            :wrapper-col="{ span: 8, offset: 12 }"
            style="text-align: right"
          >
            <Button class="mr-2" shape="round">重置</Button>
            <Button type="primary" shape="round">确定</Button>
          </FormItem>
        </Form>
      </div>
    </Card>
  </div>
</template>

<script lang="ts">
import { defineComponent, UnwrapRef, reactive } from "vue";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Row,
  Col,
  Typography,
  Select,
  Card,
} from "ant-design-vue";

interface FormState {
  name: string;
  region: string | undefined;
  // date1: Moment | undefined;
  delivery: boolean;
  type: string[];
  resource: string;
  desc: string;
}

export default defineComponent({
  name: "Home",
  components: {
    Row,
    Col,
    Card,
    Button,
    Form,
    FormItem: Form.Item,
    Input,
    InputGroup: Input.Group,
    InputNumber,
    Select,
    SelectOption: Select.Option,
    TypographyTitle: Typography.Title,
  },
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      name: "",
      time: "",
      region: undefined,
      date1: undefined,
      delivery: false,
      type: [],
      resource: "",
      desc: "",
    });

    const rules = {
      name: [
        {
          required: true,
          message: "Please input Activity name",
          trigger: "blur",
        },
      ],
      time: [
        {
          required: true,
          message: "Please input Activity name",
          trigger: "blur",
        },
      ],
      region: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change",
        },
      ],
      date1: [
        {
          required: true,
          message: "Please pick a date",
          trigger: "change",
          type: "object",
        },
      ],
      type: [
        {
          type: "array",
          required: true,
          message: "Please select at least one activity type",
          trigger: "change",
        },
      ],
      resource: [
        {
          required: true,
          message: "Please select activity resource",
          trigger: "change",
        },
      ],
      desc: [
        {
          required: true,
          message: "Please input activity form",
          trigger: "blur",
        },
      ],
    };

    return {
      formState,
      rules,
    };
  },
});
</script>

<style lang="less">
.home-container {
  background-image: url("../assets/background.svg");
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 100%;
}
</style>
