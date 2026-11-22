# tiny-stack-vm

A tiny stack virtual machine for make.fun's `tiny-stack-vm-01` ISA.
`main.ts` (Node 22, no dependencies) runs every `/input/<id>/` program and
writes `/output/<id>/stdout.bin` and `/output/<id>/exit.txt`: 32-bit wrapping
arithmetic, a 256-value stack, calls, 256 words of memory, input/output, and
all ten traps with their exit codes.
