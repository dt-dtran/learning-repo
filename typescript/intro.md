# TypeScript?
TypeScript is an 
[open source](https://github.com/microsoft/TypeScript), typed syntactic superset of JavaScript that
compiles to clean, readable JS

Three parts: 
- [Language](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- Language Server: The Language Server Protocol (LSP) defines the protocol used between an editor or IDE and a language server that provides language features like auto complete, go to definition, find all references etc.
- Compiler
  
Kind of like a fancy linter — helps purely at build time. Meaning it goes away at Prod / run time.

## Types
There may be occasions, especially when exploring TypeScript where we want to force the compiler to regard a value as being of a particular type. This is called type casting.

### Static vs dynamic
Sorting type systems as either static or dynamic has to do with whether type-checking is performed at compile time or not.
- TypeScript’s type system is static.
Java, C#, C++, TypeScript, Scala, and Haskell all have some form of static type checking.
- Dynamic type systems perform their “type equivalence” evaluation purely at runtime. JavaScript, Python, Ruby, Perl and PHP fall into this category. 
  - projects like Sorbet(ruby), Mypy(python) and others that bring static type-checking to these languages.

### Union and Intersection Types, Conceptually
Union and intersection types can conceptually be thought of as logical boolean operators (AND, OR).

- Union types | :
A union type can be thought of as OR, for types, and TypeScript uses the pipe (|) symbol to represent the Union type operator
- Intersection types & :
An intersection type can be thought of as AND, for types, and TypeScript uses the ampersand (&) symbol to represent the Intersection type operator
    - less common to use

