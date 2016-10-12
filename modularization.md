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
  |       |       |       |     |       |       |       |  INITIALIZATION MODULES
  |       |       |   d   |     |   d   |       |       |  submodule entry points that import all modules needed to construct the module unit
   -------         -------       -------         -------   testing here can aid conditional execution
      |                             |
   -------                       -------
  |       |                     |       |                  DEPENDENCIES
  |       |                     |   d   |                  module subtrees imported into initialization modules to construct submodule units
   -------                       -------                   
```

[The Morning Paper](https://blog.acolyer.org/2016/09/05/on-the-criteria-to-be-used-in-decomposing-systems-into-modules/)
