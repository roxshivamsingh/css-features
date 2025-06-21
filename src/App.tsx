import classes from "./App.module.css";
function App() {
  return (
    <div>
      <div className={classes?.PrimaryNavigation}>
        <ul>
          {NAV_OPTIONS?.map((item, i) => {
            return <li key={i}>{item.label}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
const NAV_OPTIONS = [
  { label: "Home", value: "home" },
  { label: "Contact us", value: "contact us" },
  { label: "About", value: "about" },
  { label: "Projects", value: "projects" },
];
