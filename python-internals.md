# Python Internals

[Execution Model](https://github.com/python/cpython/blob/master/Doc/reference/executionmodel.rst)

## Accessing

View the Python Abstract Syntax Tree:

```python
import ast

code = "a=1"
ast.dump(ast.parse(code))

# "Module(body=[Assign(targets=[Name(id='a', ctx=Store())], value=Num(n=1))])"
```

Disassemble python code into bytecode:

```python
import dis

def foo():
  a = 1
  print(a)

dis.dis(foo)
```

prints bytecode:

```txt
2           0 LOAD_CONST               1 (1)
            3 STORE_FAST               0 (a)

3           6 LOAD_FAST                0 (a)
            9 PRINT_ITEM          
            10 PRINT_NEWLINE       
            11 LOAD_CONST               0 (None)
            14 RETURN_VALUE        
```
