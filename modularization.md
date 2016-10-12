# Modularization

My current thoughts on making a project modular:

```txt
                   -------                                                                   -------
                  |       |   ENTRY POINT                                                   |       |  HELPERS FUNCTIONS
                  |   d   |   load data (d) and pass it down to modules that need it        |       |  top level module for helpers
                   -------                                                                   ------- 
                      |
       ______________ | ____________________________
      |               |             |               |
   -------         -------       -------         -------
  |       |       |       |     |       |       |       |  INITIALIZATION MODULE 
  |       |       |   d   |     |   d   |       |       |  work assignment unit that imports all modules needed to construct the module unit
   -------         -------       -------         -------   acts as an entry point for each submodule and testing here can aid conditional execution
      |                             |
   -------                       -------
  |       |                     |       |                  DEPENDENCIES
  |       |                     |   d   |                  submodules used to construct module units
   -------                       -------                   
```

[The Morning Paper](https://blog.acolyer.org/2016/09/05/on-the-criteria-to-be-used-in-decomposing-systems-into-modules/)
