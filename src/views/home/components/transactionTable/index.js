import React from 'react';
import {Table ,Tag} from 'antd';
import axios from '@/utils/request.js';
const columns = [
  {
    title: 'Order_No',
    dataIndex: 'order_no',
    width: 200
  },
  {
    title: 'Price',
    dataIndex: 'price',
    width: 195
  },
  {
    title: 'Status',
    dataIndex: 'status',
    width: 100,
    render: status => <Tag color={status === 'success' ? 'green' : 'red'}>{status}</Tag>
  }
]
class TransactionTable extends React.Component {
  constructor (...args) {
    super(...args);
    this.state = {
      list:null
    }
  }
  async componentDidMount () {
    await this.fetchData()
  }
  fetchData =async () => {
    const res= await axios.get('/home/transactionTable',{
      params: {
        eleToken: localStorage.getItem('eleToken')
      }
    })
    const {success} = res.data
    if(success) {
      this.setState({
        list: res.data.tableData
      })
    }
  }
  render () {
    return (
      <Table columns={columns} pagination={false} dataSource={this.state.list}>

      </Table>
    )
  }
}
export default TransactionTable;
