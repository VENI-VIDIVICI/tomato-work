import React, { useEffect, useCallback, useRef } from 'react';
import Table from '@/components/table';
import moment from 'moment';
import CreateReminder from './components/create-reminder';
import useKeepState from 'use-keep-state';
import { connect } from 'react-redux';
import { DatePicker, Button, Select, Tag, Modal } from 'antd';
import { serviceGetReminder, serviceDeleteReminder } from '@/services';
import {
  getThisYearLastDay,
  modalConfirmDelete,
  getThisYearFirstDay
} from '@/utils';

const { RangePicker } = DatePicker;
const Option = Select.Option;
const dateFormat = 'YYYY-MM-DD';
const STATUS_TYPE: any = {
  1: { color: '#f50', text: '待提醒' },
  2: { color: '#87d068', text: '已提醒' }
};

interface State {
  date: moment.Moment[];
  queryType: string;
  modalVisible: boolean;
  currentRow: { [propName: string]: any } | null;
}

type Props = ReturnType<typeof mapStateToProps>;

const initialState: State = {
  date: [],
  queryType: '',
  modalVisible: false,
  currentRow: null
};

const Reminder: React.FC<Props> = function({ userInfo }) {
  const [state, setState] = useKeepState(initialState);
  const tableRef = useRef<any>();
  const tableColumns = [
    { title: '状态', dataIndex: 'type', width: 100,
      render: (row: any) => (
        <Tag color={STATUS_TYPE[row].color}>{STATUS_TYPE[row].text}</Tag>
      )
    },
    { title: '提醒时间', dataIndex: 'date', width: 220 },
    { title: '提醒内容', dataIndex: 'content', className: 'word-break_break-all white-space_pre' },
    { title: '操作', width: 180, align: 'right',
      render: (row: any) => (
        <>
          <Button onClick={handleButton.bind(null, 0, row)}>编辑</Button>
          <Button onClick={handleButton.bind(null, 1, row)}>删除</Button>
        </>
      )
    }
  ];

  const initParams = function() {
    const startDate = moment(getThisYearFirstDay(), dateFormat);
    const endDate = moment(getThisYearLastDay(), dateFormat);
    setState({
      queryType: '',
      date: [startDate, endDate]
    });
  };

  function getReminder(params: any = {}) {
    params.startDate = state.date[0].valueOf();
    params.endDate = state.date[1].valueOf();

    if (state.queryType !== '') {
      params.type = state.queryType;
    }

    return serviceGetReminder(params).then(res => {
      if (res.data.success) {
        res.data.data.rows = res.data.data.rows.map((el: any, idx: number) => {
          el.order = idx + 1;
          el.date = moment(el.date).format('YYYY-MM-DD HH:mm:ss');
          return el;
        });
      }
      return res;
    });
  }

  const handleButton = useCallback((type: number, rows: any) => {
    // 编辑
    if (type === 0) {
      setState({ modalVisible: true, currentRow: rows });
    } else {
      modalConfirmDelete()
      .then(() => {
        serviceDeleteReminder(rows.id)
        .then(res => {
          if (res.data.success) {
            tableRef.current.getTableData();
          }
        });
      });
    }
  }, [setState]);

  // modal成功新增回调函数
  const handleModalOnSuccess = useCallback(() => {
    setState({ modalVisible: false });
    tableRef.current.getTableData();
  }, [setState]);

  useEffect(() => {
    initParams();

    if (!userInfo.email) {
      Modal.warning({
        title: '未检测到您的邮箱',
        content: (
          <>
            请将您的GitHub邮箱设为公开，否则影响本功能的使用，
            <a
              href="https://github.com/settings/profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              前往设置
            </a>
          </>
        ),
      });
    }
  }, [userInfo.email]);

  useEffect(() => {
    if (state.date.length <= 0) return;
    tableRef?.current?.getTableData();
  }, [state.date, state.queryType]);

  return (
    <div className="reminder">
      <div className="query-panel">
        <span>查询类型：</span>
        <Select
          onChange={(value: string) => setState({ queryType: value })}
          value={state.queryType}
        >
          <Option value="">全部</Option>
          <Option value="1">待提醒</Option>
          <Option value="2">已提醒</Option>
        </Select>
        <span>日期：</span>
        <RangePicker
          format={dateFormat}
          allowClear
          value={state.date}
          onChange={(date: any) => setState({ date })}
        />
        <Button type="primary" onClick={() => tableRef.current.getTableData()}>查询</Button>
        <Button onClick={initParams}>重置</Button>
      </div>
      <Table
        ref={tableRef}
        getTableData={getReminder}
        columns={tableColumns}
        onDelete={serviceDeleteReminder}
        onAdd={() => setState({ modalVisible: true, currentRow: null })}
      />
      <CreateReminder
        visible={state.modalVisible}
        rowData={state.currentRow}
        onCancel={() => setState({ modalVisible: false })}
        onSuccess={handleModalOnSuccess}
      />
    </div>
  )
}

const mapStateToProps = (store: any) => ({
  userInfo: store.user.userInfo
});

export default connect(mapStateToProps)(Reminder);
