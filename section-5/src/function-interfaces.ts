// interfaces can also define function structures.
type AddFunction1 = (n1: number, n2: number) => number;
interface AddFunction2 {
  (n1: number, n2: number): number;
}
const add: AddFunction2 = (n1, n2) => n1 + n2;
