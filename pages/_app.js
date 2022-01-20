import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "../backend/auth";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  );
}
