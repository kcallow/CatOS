; thumb size: 276 bytes; src size 1070 bytes
; assembly: 261 lines
; peep hole pass: 9 instructions removed and 3 updated
; peep hole pass: 0 instructions removed and 0 updated


; start
    .startaddr 0x31800
    .hex 708E3B92C615A841C49866C975EE5197 ; magic number
    .hex 61643EC99FBD7F45 ; hex template hash
    .hex CE5FF6020EC4E253 ; program hash
    .short 3   ; num. globals
    .short 0 ; patched with number of words resulting from assembly
    .word 0 ; reserved
    .word 0 ; reserved
    .word 0 ; reserved
;
; Function <main>
;
    .section code
    b .themain      
    .balign 4
__main__1_Lit:
    .short 0xffff, 0x0000   ; action literal
    @stackmark litfunc
.themain:
    push {lr}
    push {r5, r6}
    bl _hlp_0
    bl __main__1
    pop {r6, r5}
    pop {pc}
    @stackempty litfunc
.section code
__main__1_bkpt:
    bkpt 1
__main__1:
    @stackmark func
    @stackmark args
    push {lr}
    @stackmark locals
__main__1_locals:
    ldr r0, [r6, #0]
    lsls r0, r0, #30
    bmi __main__1_bkpt
__main__1_bkpt_after:
__brkp_1:
    movs r0, #0
    bl Array_::mk
    push {r0}; tmpstore @1
    ldr r0, [r6, #4]
    bl pxt::decr ; *P1 (raw)
    pop {r0} ; tmpref @1
    str r0, [r6, #4]
    @stackempty locals
__brkp_3:
    movs r0, #0
    str r0, [r6, #8]
    @stackempty locals
__brkp_4:
.fortop.159:
    ldr r0, [r6, #8]
    movs r1, #4
    bl Number_::lt
    cmp r0, #0
    beq .brk.159      
.jmpz1:
__brkp_5:
    movs r0, #3
    push {r0} ; proc-arg
.proccall2:
    bl _tellCameraTo_153
    add sp, #4*1 ; pop locals1
    @stackempty locals
.cont.159:
__brkp_6:
    ldr r0, [r6, #8]
    movs r1, #1
    adds r0, r1
    str r0, [r6, #8]
    @stackempty locals
    b .fortop.159      
.brk.159:
__brkp_7:
    movs r0, _inline_161_Lit@hi  ; ldptr
    lsls r0, r0, #8
    adds r0, _inline_161_Lit@lo
    bl pxt::ptrOfLiteral
    bl basic::forever
    @stackempty locals
.ret.1:
    @stackempty locals
    pop {pc}
    @stackempty func
    @stackempty args
;
; Function inline
;
    .section code
    .balign 4
_inline_161_Lit:
    .short 0xffff, 0x0000   ; action literal
    @stackmark litfunc
    push {lr}
    push {r5, r6}
    bl _hlp_0
    bl _inline_161
    pop {r6, r5}
    pop {pc}
    @stackempty litfunc
.section code
_inline_161_bkpt:
    bkpt 1
_inline_161:
    @stackmark func
    @stackmark args
    push {lr}
    @stackmark locals
_inline_161_locals:
    ldr r0, [r6, #0]
    lsls r0, r0, #30
    bmi _inline_161_bkpt
_inline_161_bkpt_after:
__brkp_8:
    movs r0, _str0meta@hi  ; ldptr
    lsls r0, r0, #8
    adds r0, _str0meta@lo
    bl pxt::ptrOfLiteral
    movs r1, #150
    bl basic::showString
    @stackempty locals
.ret.161:
    @stackempty locals
    pop {pc}
    @stackempty func
    @stackempty args
;
; Function tellCameraTo
;
    .section code
    .balign 4
_tellCameraTo_153_Lit:
    .short 0xffff, 0x0000   ; action literal
    @stackmark litfunc
    push {lr}
    push {r5, r6}
    push {r1}
    bl _hlp_0
    bl _tellCameraTo_153
    add sp, #4*1 ; pop locals1
    pop {r6, r5}
    pop {pc}
    @stackempty litfunc
.section code
_tellCameraTo_153_bkpt:
    bkpt 1
_tellCameraTo_153:
    @stackmark func
    @stackmark args
    push {lr}
    @stackmark locals
_tellCameraTo_153_locals:
    ldr r0, [r6, #0]
    lsls r0, r0, #30
    bmi _tellCameraTo_153_bkpt
_tellCameraTo_153_bkpt_after:
__brkp_2:
    movs r0, #3
lsls r0, r0, #8
adds r0, #234
    ldr r1, [sp, args@0]
    movs r2, #1
    bl control::raiseEvent
    @stackempty locals
.ret.153:
    @stackempty locals
    pop {pc}
    @stackempty func
    @stackempty args
    .section code
_hlp_0:
    @stackmark args
    push {lr}
    mov r5, r0
    bl pxtrt::getGlobalsPtr
    mov r6, r0
    pop {pc}
    @stackempty args
_js_end:
.balign 4
_str0meta:
 .short 0xffff, 6
_str0:
 .string "Hello!"
_program_end:
    .balign 16
    .hex 41140E2FB82FA2BB
    .short 153
    .short 887
    .short 0, 0   ; future use
_stored_program: .string "..."
