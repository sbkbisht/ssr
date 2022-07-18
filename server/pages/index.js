import React from "react";
// next js support module style
import styles from "./index.module.css";
import Card from "./Card";
// import data from "./API/data.json";
import { initStore, addItem, initialCards } from "../store";

class Index extends React.Component {
  static async getInitialProps({ store }) {
    return store.dispatch(initialCards());
  }
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <img src="/logo.png" className={styles.logo} alt="logo" />
        </header>
        <div className={styles.grid}>
          {this.props.cards.map((card) => (
            <Card key={card.id} />
          ))}
          <Card />
        </div>
      </div>
    );
  }
}

export default initStore.withRedux(Index);
