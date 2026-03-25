import Tabs from "../../components/props-exercises/tabs-example/Tabs";
import Tab from "../../components/props-exercises/tabs-example/Tab";

function TabsDemoPage() {
  return (
    <div style={{ padding: "40px" }}>
      <h2>Tabs Demo</h2>

      <Tabs>
        <Tab label="Profile">
          <p>Name: Ivan Petrov</p>
          <p>Клас: 11 B</p>
        </Tab>

        <Tab label="Grades">
          <ul>
            <li>Math: 5.50</li>
            <li>Physics: 6.00</li>
          </ul>
        </Tab>

        <Tab label="Settings">
          <button> Change profile </button>
        </Tab>
      </Tabs>
    </div>
  );
}

export default TabsDemoPage;