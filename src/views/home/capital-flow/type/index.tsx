import React, { useEffect } from 'react';
import './style.scss';
import moment from 'moment';
import useKeepState from 'use-keep-state';
import CreateType from '../components/create-type/index';
import { Table, Button, Tag, message } from 'antd';
import {
  serviceGetCapitalFlowType,
  serviceDeleteCapitalFlowType
} from '@/services';
import { TypeNames, TypeColors } from '../enum';

const initialState = {
  modalVisible: false,
  selectedRowKeys: [],
  loading: false,
  data: [],
  rowData: null
};

const Type = () => {
  const [state, setState] = useKeepState(initialState);
  const tableColumns = [
    { title: '账务类型', dataIndex: 'name' },
    { title: '收支类别', render: (rowData: any) => (
      <Tag color={rowData.color}>{rowData.typeName}</Tag>
    ) },
    { title: '创建时间', dataIndex: 'createdAt' },
    { title: '操作', render: (rowData: any) => (
      <Button onClick={handleEdit.bind(null, rowData)}>编辑</Button>
    ) },
  ];

  const onSelectChange = function(selectedRowKeys: any) {
    setState({ selectedRowKeys });
  };

  function getCapitalFlowType() {
    serviceGetCapitalFlowType()
      .then(res => {
        if (res.data.success) {
          const handleData = res.data.data.map((item: any) => {
            item.typeName = TypeNames[item.type];
            item.color = TypeColors[item.type];
            item.createdAt = moment(item.createdAt).format('YYYY-MM-DD hh:mm');
            return item;
          });
          setState({ data: handleData });
        }
      });
  }

  function deleteCapitalFlowType() {
    const ids = state.selectedRowKeys.join();
    if (!ids) return;
    serviceDeleteCapitalFlowType(ids)
      .then(res => {
        if (res.data.success) {
          getCapitalFlowType();
        }
      });
  }

  function handleOnSuccess() {
    setState({ modalVisible: false });
    getCapitalFlowType();
  }

  function handleAdd() {
    if (state.data.length >= 100) {
      message.warn('类型超出100条');
      return;
    }
    setState({
      modalVisible: true,
      rowData: null
    });
  }

  function handleEdit(rowData: any) {
    setState({
      modalVisible: true,
      rowData
    });
  }

  useEffect(() => {
    getCapitalFlowType();
  }, []);

  const rowSelection = {
    selectedRowKeys: state.selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div className="capital-flow-type">
      <div className="button-group">
        <Button type="primary" danger onClick={deleteCapitalFlowType}>删除</Button>
        <Button type="primary" onClick={handleAdd}>新增</Button>
      </div>
      <Table
        rowSelection={rowSelection}
        columns={tableColumns}
        dataSource={state.data}
        pagination={false}
        rowKey="id"
      />
      <CreateType
        visible={state.modalVisible}
        rowData={state.rowData}
        onCancel={() => setState({ modalVisible: false })}
        onSuccess={handleOnSuccess}
      />
    </div>
  )
};

export default Type;
