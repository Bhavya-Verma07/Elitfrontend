import React, { useState, useContext, createContext, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { toast } from "react-toastify";

const authContext = createContext();
const quizes = [
  {
    Question: "1. Hint: It's a famous Art/Painting belongs to the land of Maharajas:",
    a: "Rajasthan",
    b: "Bihar",
    c: "Punjab",
    d: "Tamil Nadu",
    correct: "Bihar",
  },
  {
    Question:
      "2. Hint: This state enjoyed the privilege of being the captial of British India:",
    a: "Andhra Pradesh",
    b: "Maharashtra",
    c: "Delhi",
    d: "Kolkata",
    correct: "Kolkata",
  },
  {
    Question: "3.Hint: The place Known as the Land of God:",
    a: "Odisha",
    b: "Chhattisgarh",
    c: "Uttar Pradesh",
    d: "Kerela",
    correct: "Odisha",
  },
  {
    Question: "4. Hint: The stupa is a situated in state of northern India:",
    a: "Bihar",
    b: "Uttar Pradesh",
    c: "Madhya Pradesh",
    d: "Rajasthan",
    correct: "Uttar Pradesh",
  },
  {
    Question:
      "5. Hint: The Home town of missile man of India is situated in this state:",
    a: "Bihar",
    b: "Tamil Nadu",
    c: "Karnataka",
    d: "Andhra Pradesh",
    correct: "Tamil Nadu",
  },
  {
    Question: "6. Hint: The city of dreams is the capital of this state:",
    a: "Andhra Pradesh",
    b: "Maharashtra",
    c: "Delhi",
    d: "Kolkata",
    correct: "Maharashtra",
  },
  {
    Question:
      "7. Hint: This is a famous temple of this state, also the statue of Iron Man of India is situated here:",
    a: "Assam",
    b: "Gujarat",
    c: "Odisha",
    d: "Kerala",
    correct: "Gujarat",
  },
  {
    Question: "8. Hint: A famous dance form, belongs to which state? ",
    a: "Assam",
    b: "Manipur",
    c: "Odisha",
    d: "Rajasthan",
    correct: "Rajasthan",
  },
  {
    Question:
      "9. Hint: It's a famous dish of the state which is also the birthplace of Lajpat rai. Solving this will land you in the place where central bank of India is located:",
    a: "Punjab",
    b: "Delhi",
    c: "Madhya Pradesh",
    d: "Kerela",
    correct: "Punjab",
  },
  {
    Question:
      "10. Hint: Meaning behind the name of this place is “instruments for measuring the harmony of the heavens”, it's located in?",
    a: "Delhi",
    b: "Kerela",
    c: "Jharkhand",
    d: "Nagaland",
    correct: "Delhi",
  },
];
function useProvideAuth() {
  const [start, setStart] = useState(false);
  const [exit, setExit] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [user, setuser] = useState();

  const signOut = async () => {
    try {
      const response = await axios.get("/logout");
      if (response.data.success) {
        setuser(null);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        return toast.error(error.response.data.error);
      }
    }
  };
  const getUser = async () => {
    try {
      const response = await axios.get("/current");
      if (response.data.success) {
        setuser(response.data.data);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        return toast.error(error.response.data.error);
      }
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return {
    user,
    setuser,
    start,
    setStart,
    exit,
    setExit,
    correct,
    setCorrect,
    quizes,
    signOut,
    getUser,
  };
}
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
ProvideAuth.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(authContext);
