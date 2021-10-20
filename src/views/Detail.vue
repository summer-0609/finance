<template>
  <div class="flex flex-col h-full">
    <div class="bg-white">
      <PageHeader
        style="border-bottom: 1px solid rgb(235, 237, 240)"
        title="XXX策略回测详情"
        @back="() => $router.go(-1)"
      >
      </PageHeader>
    </div>
    <div class="p-6 flex-1 overflow-auto">
      <Card>
        <Descriptions title="收益概述" :column="5">
          <DescriptionsItem label="策略收益">
            <PlusOutlined class="text-red" :style="{ fontSize: '10px' }" />
            <span class="text-red">43.56%</span>
          </DescriptionsItem>
          <DescriptionsItem label="策略年化收益">
            <MinusOutlined class="text-green" :style="{ fontSize: '10px' }" />
            <span class="text-green">3.42%</span>
          </DescriptionsItem>
          <DescriptionsItem label="超额收益">43.56%</DescriptionsItem>
          <DescriptionsItem label="基准收益">43.56%</DescriptionsItem>
          <DescriptionsItem label="阿尔法"> 0.64 </DescriptionsItem>
          <DescriptionsItem label="贝塔"> 0.64 </DescriptionsItem>
          <DescriptionsItem label="夏普比率"> 0.64 </DescriptionsItem>
          <DescriptionsItem label="胜率"> 0.64 </DescriptionsItem>
          <DescriptionsItem label="盈亏比"> 0.64 </DescriptionsItem>
          <DescriptionsItem label="最大回撤"> 0.64 </DescriptionsItem>
          <DescriptionsItem label="索提诺比率"> 0.64 </DescriptionsItem>
          <DescriptionsItem label="日均超额比率"> 0.64 </DescriptionsItem>
          <DescriptionsItem label="日均超额收益"> 0.64 </DescriptionsItem>
          <DescriptionsItem label="超额收益最大回撤"> 0.64 </DescriptionsItem>
          <DescriptionsItem label="超额收益夏普比率"> 0.64 </DescriptionsItem>
          <DescriptionsItem label="日胜率"> 0.64 </DescriptionsItem>
          <DescriptionsItem label="盈利次数"> 0.64 </DescriptionsItem>
          <DescriptionsItem label="亏损次数"> 0.64 </DescriptionsItem>
          <DescriptionsItem label="信息比率"> 0.64 </DescriptionsItem>
          <DescriptionsItem label="策略波动率"> 0.64 </DescriptionsItem>
          <DescriptionsItem label="基准波动率"> 0.64 </DescriptionsItem>
          <DescriptionsItem label="最大回撤区间"> 0.64 </DescriptionsItem>
        </Descriptions>
        <Divider />
        <Charts />
      </Card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { PageHeader, Card, Descriptions, Divider } from "ant-design-vue";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons-vue";
import Charts from "@/components/Charts.vue";

export default defineComponent({
  components: {
    PageHeader,
    Card,
    Divider,
    Descriptions,
    DescriptionsItem: Descriptions.Item,
    PlusOutlined,
    MinusOutlined,
    Charts,
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
.ant-descriptions-title {
  text-align: left;
}
.ant-descriptions-item-container .ant-descriptions-item-label,
.ant-descriptions-item-container .ant-descriptions-item-content {
  align-items: center;
}
svg {
  vertical-align: baseline;
}
</style>
