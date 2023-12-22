"use client";

// import { useGetUserId } from "@/hooks/api/user";
// import { useAuthorizer } from "@authorizerdev/authorizer-react";
import { useEffect, useState, useContext, createContext } from "react";

interface SemanticContextProps {
  params: any;
  setParams: any;
  reset: any;
  handleChange: (name: string, value: any)=>void;
  parsedContext: any;
  setParsedContext: any;
  initialQuestion: string;
  setInitialQuestion: (intialQuestion: string) => void;
}

interface SemanticSearchProps {
  initial_keyword: string;
  keyword: string;
  kb_id: string;
  app_id: string;
  session_id: string;
  target: string | null;
  geo: string | null;
  industry: string | null;
  context: string | null;
  chat_history: any[] | null;
}

const SemanticContext = createContext<SemanticContextProps | undefined>(
  undefined
);

export const SemanticProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {

  // const {user} = useAuthorizer()
  // const [chatHistory, setChatHistory] = useState([{
  //   "user":"",
  //   "system":"",
  // }]);
  const [initialQuestion, setInitialQuestion] = useState("");
  const [parsedContext, setParsedContext] = useState([
    // ["1","1","1"],
    // ["2","2","2"],
    // ["3","3","3"],
    // ["4","4","4"],
    // ["5","5","5"],
    // ["6","6","6"],
    // ["7","7","7"],
    // ["8","8","8"],
    // ["9","9","9"],
    // ["10","10","10"],
  ]);
  const getUserId = "0"
  const [params, setParams] = useState<SemanticSearchProps>({
    initial_keyword: "",
    keyword: "",
    kb_id: "123456",
    app_id: "",
    session_id: "",
    target: "",
    geo: "",
    industry: "",
    context: '',
    chat_history: [],
    user_id:getUserId.data?.data.user_id
  });

  const reset = () => {
    setParsedContext([]);
    setParams({
      initial_keyword: "",
      keyword: "",
      kb_id: "123456",
      app_id: "",
      session_id: "",
      target: "",
      geo: "",
      industry: "",
      context: null,
      chat_history: [],
      user_id:getUserId.data?.data.user_id
    });
    setInitialQuestion("");
  };

  const handleChange = (name: string, value: any) => {
    setParams((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  return (
    <SemanticContext.Provider
      value={{
        params,
        setParams,
        parsedContext,
        setParsedContext,
        reset,
        handleChange,
        initialQuestion,
        setInitialQuestion,
      }}
    >
      {children}
    </SemanticContext.Provider>
  );
};

export const useSemanticContext = () => {
  const context = useContext(SemanticContext);
  if (!context) {
    throw new Error("useSemanticContext must be used within a SemanticContext");
  }
  return context;
};

// export default ;
