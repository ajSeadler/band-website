/* eslint-disable react/no-unescaped-entities */
import DiscoBall from "./DiscoBall";
const ComingSoon = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <DiscoBall />
        <h1 style={styles.heading}>Disco Stranger</h1>
        <p style={styles.subtext}>
          We're working on a fresh new sound. Stay tuned for updates!
        </p>
        <p style={styles.footer}>Thank you for your patience.</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    width: "100%",
    backgroundColor: "#0D0D0D",

    color: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: "'Arial', sans-serif",
  },
  content: {
    maxWidth: "600px",
    border: "solid 2px #fff",
    borderRadius: "20px",
    padding: "2rem",
  },
  heading: {
    fontSize: "3rem",
    margin: "0 0 20px",
    letterSpacing: "2px",
  },
  subtext: {
    fontSize: "1.2rem",
    lineHeight: "1.6",
    marginBottom: "20px",
  },
  footer: {
    fontSize: "0.9rem",
    color: "#AAAAAA",
  },
};

export default ComingSoon;
