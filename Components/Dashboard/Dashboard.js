import {
    DollarCircleOutlined,
    ShoppingCartOutlined,
    ShoppingOutlined,
    UserOutlined,
  } from "@ant-design/icons";
 import { Box } from "@mui/material";
  import { Card, Space, Statistic, Typography } from "antd";
  import { useEffect, useState } from "react";
  import { getCustomers, getInventory, getOrders, getRevenue } from "../../API";
  
  const drawerWidth = 30;
  
  function Dashboard() {
    const [orders, setOrders] = useState(0);
    const [inventory, setInventory] = useState(0);
    const [customers, setCustomers] = useState(0);
    const [revenue, setRevenue] = useState(0);
  
    useEffect(() => {
      getOrders().then((res) => {
        setOrders(res.total);
        setRevenue(res.discountedTotal);
      });
      getInventory().then((res) => {
        setInventory(res.total);
      });
      getCustomers().then((res) => {
        setCustomers(res.total);
      });
    }, []);
  
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: { sm: drawerWidth } }}>
      <Space size={20} direction="vertical">
        <Typography.Title level={4} style={{ marginBottom: -29}}>Welcome Back John</Typography.Title>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi libero </p>
        <Space direction="horizontal">
          <DashboardCard
            icon={
              <ShoppingCartOutlined
                style={{
                  color: "green",
                  backgroundColor: "rgba(0,255,0,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Active Loans"}
            value={orders}
          />
          <DashboardCard
             icon={
                <UserOutlined
                  style={{
                    color: "purple",
                    backgroundColor: "rgba(0,255,255,0.25)",
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8,
                  }}
                />
              }
            title={"Customers"}
            value={inventory}
          />
          <DashboardCard
           icon={
            <ShoppingOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
            title={"Unapproved Loans"}
            value={customers}
          />
          <DashboardCard
            icon={
              <DollarCircleOutlined
                style={{
                  color: "red",
                  backgroundColor: "rgba(255,0,0,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Payment Due"}
            value={revenue}
          />
        </Space>
        <Space>
          <RecentOrders />
          
        </Space>
      </Space>
      </Box>
    );
  }
  
  function DashboardCard({ title, value, icon }) {
    return (
      <Card>
        <Space direction="horizontal">
          {icon}
          <Statistic title={title} value={value} />
        </Space>
      </Card>
    );
  }
  function RecentOrders() {
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      getOrders().then((res) => {
        setDataSource(res.products.splice(0, 3));
        setLoading(false);
      });
    }, []);
  
    
  }
  
 
  
  export default Dashboard;
  
