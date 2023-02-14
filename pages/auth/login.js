import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../utils/firebase";
import {FcGoogle} from 'react-icons/fc';
import { useRouter } from "next/router";

export default function Login () {
    const route = useRouter();
    // const [user, loading] = useAuthState(auth);
    // Signing in
    const googleProvider = new GoogleAuthProvider()
    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            route.push("/");
        } catch (error) {
            console.log(error);
          }
    }
    return(
        <div className="shadow-xl bg-white text-center mt-32 ml-32 mr-32 p-10 text-gray-700 rounded-lg">
            <div className="py-2">
        <button
          onClick={signInWithGoogle}
          className="text-white bg-gray-700 text-center w-full font-bold rounded-lg flex align-middle p-4 gap-2 hover:bg-violet-600 focus:ring focus:ring-violet-300"
        >
          <FcGoogle className="text-2xl" />
          Sign in with Google
        </button>
      </div>
    </div>
    )
}