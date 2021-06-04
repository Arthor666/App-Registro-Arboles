import sys
from werkzeug.security import generate_password_hash, check_password_hash
pass_hash = check_password_hash(sys.argv[1],sys.argv[2])
print(pass_hash)
