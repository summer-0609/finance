<template>
  <div class="flex flex-col h-full">
    <div class="bg-white">
      <PageHeader
        style="border-bottom: 1px solid rgb(235, 237, 240)"
        title="XXX一号"
        sub-title="XXX策略"
        @back="() => $router.go(-1)"
      >
        <template v-slot:extra>
          <Button type="primary">策略回测</Button>
        </template>
        <Row type="flex">
          <Statistic
            title="净资产"
            :precision="2"
            :value="112893"
            :style="{ marginRight: '32px' }"
          />
          <Statistic
            title="当日盈亏"
            :precision="2"
            :value="568.08"
            :style="{ marginRight: '32px' }"
            :value-style="{ color: '#cf1322' }"
          >
            <template #prefix>
              <PlusOutlined :style="{ fontSize: '16px', verticalAlign: 0 }" />
            </template>
          </Statistic>
          <Statistic
            title="日回报"
            :value="9.3"
            :precision="2"
            suffix="%"
            :style="{ marginRight: '32px' }"
            :value-style="{ color: '#3f8600' }"
          >
            <template #prefix>
              <ArrowDownOutlined />
            </template>
          </Statistic>
          <Statistic
            title="日超额"
            class="demo-class"
            :value="9.3"
            :precision="2"
            suffix="%"
            :value-style="{ color: '#cf1322' }"
          >
            <template #prefix>
              <ArrowUpOutlined />
            </template>
          </Statistic>
        </Row>
      </PageHeader>
    </div>
    <div class="p-6 flex-1 overflow-auto box-border">
      <Card>
        <Table sticky bordered :columns="columns" :data-source="data"></Table>
      </Card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import {
  PageHeader,
  Statistic,
  Button,
  Row,
  Card,
  Table,
} from "ant-design-vue";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  PlusOutlined,
} from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    PageHeader,
    Statistic,
    Button,
    Row,
    Card,
    Table,
    ArrowUpOutlined,
    ArrowDownOutlined,
    PlusOutlined,
  },
  setup() {
    const columns = [
      {
        title: "证券代码",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "科创分数",
        dataIndex: "age",
        key: "age",
      },
      {
        title: "上市时间",
        dataIndex: "address",
        key: "address",
      },
      {
        title: "行业分类",
        key: "tags",
        dataIndex: "tags",
      },
      {
        title: "Action",
        key: "action",
      },
    ];

    const data = [
      {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        tags: ["nice", "developer"],
      },
      {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: ["loser"],
      },
      {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      },
      {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        tags: ["nice", "developer"],
      },
      {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: ["loser"],
      },
      {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      },
    ];

    return {
      columns,
      data,
    };
  },
});
</script>

<style>
svg {
  vertical-align: baseline;
}
</style>
