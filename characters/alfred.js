const chalk = require('chalk')

module.exports = ({ thoughts }) => `
       ${thoughts}
        ${thoughts}
                                                                
              .@@#              .%@.                      
          /@                         @@                   
        @                               @@                
     *@                                  @/@@             
    @@@           @. @#               @@@${chalk.bgWhite('    ')}@@@           
   @(##@@       &&   /@@           @@@,${chalk.bgWhite('        ')}@&         
  %  /   (        %@/            #@@${chalk.bgWhite('            ')}@&         
  @ @    @       @              .,${chalk.bgWhite('             ')},//         
  %*(@@%@       &                @@${chalk.bgWhite('           ')},@/          
  @   ,#       ((@@@@            @@,${chalk.bgWhite('      ')}/@@ #/           
  @# @          *@@@@@            @@${chalk.bgWhite('   ')}@,    @/           
  &@      @/     @                 @ @*  @( @@            
 @*       ./       #@@%             ,@  @   @            
@        @                              @   @,            
 &                                        ,@              
 @    @@@                            # @@/                            
 @   @, % @,                        @  @                              
 @  *&@  @& @(                     @   @                              
 @ , (@@@@@@ (@@                 .&    @                              
  @              ,              @      @                              
   ,#                         @        @                              
    @                     @@#          (                              
    %(           @ ,                   **@                            
     @@,       @                      @%  %*                          
            @                       @(      @@@                       
             @                    @          ,    @@                  
              @           @.#  @/            @         @@             
           &(@/@        @   @                @              .@@#      
            ,   @@   @/     @               @*                     @@
         %@.@      &        @              .(                         
    &@@    @,@              @              @                          
.@@.        @  #    @.  *@    @             @                           
@@*             @    ( @         @@             @                            
        @                               @                             
       @                               @                              
      #                               %                                       
`
