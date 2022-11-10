import React, { useState } from "react";
import { useAuth } from "@micro-stacks/react";

import { useEffect } from "react";

/**
 * PayContract
 *
 * @version 1.0.0
 * @author [Javadroid](https://github.com/javadroid)
 */


export const WalletConnectButton = () => {
  /**
   *
   * The primary way you'll implement authentication is via the useAuth hook.
   * This hook exposes a few callbacks for different functions:
   * openAuthRequest, signOut, along with some helper variables: isRequestPending isSignedIn.
   *
   */

  const { openAuthRequest, isRequestPending, signOut, isSignedIn } = useAuth();
  const label = isRequestPending
    ? "Loading..."
    : isSignedIn
    ? "Sign out"
    : "Connect Stacks wallet";


  return (
    <>
     
      <button
        onClick={async () => {
          if (isSignedIn) await signOut()
          else await openAuthRequest();
        }}
      >
        {label}
      </button>
    </>
  );
};
