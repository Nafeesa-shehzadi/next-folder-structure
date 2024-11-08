// styles.ts
export const styles = {
  homePageContainer: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "background.default",
  },
  typography: {
    color: "primary",
    fontFamily: "sans-serif",
    margin: "20px",
    fontWeight: "bold",
  },
  textField: {
    marginBottom: "20px",
    width: "600px",
    borderRadius: "50px",
    backgroundColor: "#fff",
  },
  button: {
    margin: "10px",
    width: "200px",
    borderRadius: "50px",
    color: "primary",
    display: "flex",
    flexDirection: "column" as const,
    textTransform: "none" as const,
  },

  EditModal: {
    width: "200px",
    margin: "auto",
    backgroundColor: "default",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: 50,
  },
};
