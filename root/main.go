// Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %} <{%= author_email %}>
// Licensed under {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
//
// {%= description %}

package main

import (
	"flag"
	"fmt"
	"os"
	"runtime"
)

var (
	repeat = flag.Int("repeat", 1, "Repeat the printing X times. X must be >= 1.")
)

func usage() {
	fmt.Fprintf(os.Stderr, "usage: {%= bin %} [flags] word\n")
	flag.PrintDefaults()
	os.Exit(2)
}

func main() {
	runtime.GOMAXPROCS(runtime.NumCPU())

	flag.Usage = usage
	flag.Parse()

	if *repeat < 1 {
		usage()
	}

	if flag.Arg(0) == "" {
		usage()
	}
	say(flag.Arg(0))
}

func say(word string) {
	for i := 0; i < *repeat; i++ {
		fmt.Printf("%s\n", word)
	}
}
