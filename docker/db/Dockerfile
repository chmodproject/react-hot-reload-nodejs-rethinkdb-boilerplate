From rethinkdb

RUN apt-get update

RUN apt-get -y install python-pip

RUN pip install rethinkdb

VOLUME ["/storage"]

WORKDIR /storage

CMD ["rethinkdb", "--bind", "all"]

# Expose ports.
#   - 8080: web UI
#   - 28015: process
#   - 29015: cluster
EXPOSE 8080
EXPOSE 28015
EXPOSE 29015

#rethinkdb-dump
#rethinkdb-export
#rethinkdb-import
#rethinkdb-index-rebuild
#rethinkdb-restore