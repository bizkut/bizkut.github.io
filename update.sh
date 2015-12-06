./remove.sh

dpkg-deb -b -Zgzip "com.kongsi.clashofkongsi"

dpkg-scanpackages -m . /dev/null > Packages
bzip2 Packages
