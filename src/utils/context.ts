import React from 'react'

export function createStrictContext<ContextType>(
  options: {
    errorMessage?: string
    name?: string
  } = {}
) {

  const Context = React.createContext<ContextType | undefined>(undefined)
  Context.displayName = options.name // for DevTools

  function useContext() {
    console.log(options);
    const context = React.useContext(Context)
    if (context === undefined) {
      throw new Error(
        options.errorMessage || `${options.name || ''} Context Provider is missing`
      )
    }
    return context
  }

  return [Context.Provider, useContext] as [React.Provider<ContextType>, () => ContextType]
}
