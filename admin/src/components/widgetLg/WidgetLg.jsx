import {useEffect, useState} from "react";
import "./widgetLg.css";
import {userRequest} from "../../requestMethods";
import {formatDistanceToNow} from "date-fns";

export default function WidgetLg() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        setOrders(res.data);
      } catch (error) {}
    };
    getOrders();
  }, []);

  const Button = ({type}) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  const formatTimeAgo = (dateString) => {
    const date = new Date(dateString);
    return formatDistanceToNow(date, {addSuffix: true});
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <thead>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr className="widgetLgTr" key={order._id}>
              <td className="widgetLgUser">
                <span className="widgetLgName">{order.userId}</span>
              </td>
              <td className="widgetLgDate">{formatTimeAgo(order.createdAt)}</td>
              <td className="widgetLgAmount">{order.amount}</td>
              <td className="widgetLgStatus">
                <Button type={order.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
