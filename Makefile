.PHONY: pedigree help reset run

# Show folder and file hierarchy up to 4 generations deep
pedigree:
	if command -v tree >/dev/null 2>&1; then \
		tree -L 4 -I 'node_modules'; \
	else \
		find . -maxdepth 4 \
			\( -path '*/node_modules' -o -path '*/.*' \) -prune -o -print; \
	fi

reset:
	git reset --hard HEAD

run:
	ng serve -o
